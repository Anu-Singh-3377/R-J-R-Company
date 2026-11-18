import { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle, X, Loader2 } from 'lucide-react';
import StatusBadge from './StatusBadge';

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx', '.xls', '.xlsx'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function FileUpload({ onNotification }) {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  function validateFile(file) {
    const ext = '.' + file.name.split('.').pop().toLowerCase();
    const isValidType =
      ALLOWED_MIME_TYPES.includes(file.type) || ALLOWED_EXTENSIONS.includes(ext);

    if (!isValidType) {
      return { valid: false, error: 'Unsupported file type. Use PDF, Word, Excel, or images.' };
    }
    if (file.size > MAX_FILE_SIZE) {
      return { valid: false, error: 'File exceeds 10 MB maximum limit.' };
    }
    return { valid: true };
  }

  function handleFiles(incomingList) {
    const fileArray = Array.from(incomingList);
    let rejectedCount = 0;
    const newItems = [];

    fileArray.forEach((file) => {
      const check = validateFile(file);
      if (check.valid) {
        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          file,
          name: file.name,
          size: file.size,
          progress: 100,
          status: 'Ready for Review',
          uploadedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
      } else {
        rejectedCount++;
      }
    });

    if (newItems.length > 0) {
      setFiles((prev) => [...prev, ...newItems]);
      onNotification?.({
        type: 'success',
        title: 'Documents Staged',
        message: `${newItems.length} file(s) added securely to upload queue.`,
      });
    }

    if (rejectedCount > 0) {
      setUploadMessage(
        `${rejectedCount} file(s) could not be accepted. Permitted formats: PDF, JPG, PNG, DOC, XLS (up to 10MB).`
      );
      onNotification?.({
        type: 'warning',
        title: 'File Rejected',
        message: 'Allowed formats: PDF, Word, Excel, or Images under 10MB.',
      });
    } else {
      setUploadMessage('');
    }
  }

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }

  function removeFile(id) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  return (
    <div className="file-upload-component">
      <div
        className={`dropzone-box ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <div className="dropzone-inner">
          <div className="upload-icon-circle">
            <Upload size={28} />
          </div>
          <h4>Drag & Drop secure files here</h4>
          <p className="dropzone-subtitle">or choose files from your computer</p>
          <div className="format-pills">
            <span>PDF</span>
            <span>JPG / PNG</span>
            <span>DOC / DOCX</span>
            <span>XLS / XLSX</span>
            <span className="limit">Max 10 MB</span>
          </div>

          <button
            type="button"
            className="button primary browse-btn"
            onClick={() => fileInputRef.current?.click()}
          >
            Browse Files
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
            aria-label="Upload documents"
            className="hidden-file-input"
            onChange={(e) => {
              if (e.target.files) handleFiles(e.target.files);
            }}
          />
        </div>
      </div>

      {uploadMessage && (
        <div className="upload-warning-banner" role="status">
          <AlertCircle size={16} />
          <span>{uploadMessage}</span>
        </div>
      )}

      {files.length > 0 && (
        <div className="staged-files-list">
          <div className="staged-header">
            <h4>Uploaded Document Queue ({files.length})</h4>
            <small>Encrypted in transit</small>
          </div>

          <ul className="file-items-list">
            {files.map((item) => (
              <li key={item.id} className="file-queue-item">
                <div className="file-item-left">
                  <div className="doc-icon-wrap">
                    <FileText size={18} />
                  </div>
                  <div className="doc-info">
                    <span className="doc-name">{item.name}</span>
                    <span className="doc-meta">
                      {formatBytes(item.size)} • Added {item.uploadedAt}
                    </span>
                  </div>
                </div>

                <div className="file-item-right">
                  <StatusBadge status="verified" label="Encrypted" />
                  <button
                    type="button"
                    className="remove-doc-btn"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeFile(item.id)}
                  >
                    <X size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
