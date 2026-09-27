import { useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt, FaDownload, FaFilePdf } from 'react-icons/fa';
import './resumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="resume-modal-overlay" onClick={onClose}>
            <div 
                className="resume-modal-content" 
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="resume-modal-title"
            >
                {/* Header */}
                <div className="resume-modal-header">
                    <div className="resume-modal-title" id="resume-modal-title">
                        <FaFilePdf className="resume-pdf-icon" />
                        <div>
                            <h3>Thota Lakshmi Prasanna — Resume</h3>
                            <span className="resume-modal-subtitle">Full-Stack Web Developer • B.Tech (CSE)</span>
                        </div>
                    </div>
                    
                    <div className="resume-modal-actions">
                        <a
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-action-link"
                            title="Open in new browser tab"
                        >
                            <FaExternalLinkAlt /> <span>New Tab</span>
                        </a>
                        <a
                            href="/Resume.pdf"
                            download="Lakshmi_Prasanna_Thota_Resume.pdf"
                            className="resume-action-link download-accent"
                            title="Download PDF file"
                        >
                            <FaDownload /> <span>Download</span>
                        </a>
                        <button
                            type="button"
                            onClick={onClose}
                            className="resume-modal-close"
                            aria-label="Close resume modal"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer Body */}
                <div className="resume-modal-body">
                    <object
                        data="/Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                        type="application/pdf"
                        className="resume-pdf-viewer"
                    >
                        <iframe
                            src="/Resume.pdf#toolbar=1"
                            title="Lakshmi Prasanna Resume PDF"
                            className="resume-pdf-viewer"
                        >
                            <div className="resume-fallback-msg">
                                <p>Your browser is unable to display the PDF preview directly.</p>
                                <a
                                    href="/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fallback-btn"
                                >
                                    Click here to open Resume PDF
                                </a>
                            </div>
                        </iframe>
                    </object>
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
