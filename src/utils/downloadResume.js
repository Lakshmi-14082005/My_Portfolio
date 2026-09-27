/**
 * Reliable resume download and view helper.
 * Uses Blob object URL to prevent iframe download errors and CORS/network blocks.
 */
export const downloadResume = async (filename = 'Lakshmi_Prasanna_Thota_Resume.pdf') => {
    try {
        const response = await fetch('/Resume.pdf');
        if (!response.ok) {
            throw new Error(`Failed to fetch resume: ${response.statusText}`);
        }
        const blob = await response.blob();
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        const blobUrl = window.URL.createObjectURL(pdfBlob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();

        setTimeout(() => {
            if (document.body.contains(link)) {
                document.body.removeChild(link);
            }
            window.URL.revokeObjectURL(blobUrl);
        }, 1500);
    } catch (error) {
        console.error('Blob download failed, falling back to direct open:', error);
        window.open('/Resume.pdf', '_blank', 'noopener,noreferrer');
    }
};

export const viewResume = () => {
    window.open('/Resume.pdf', '_blank', 'noopener,noreferrer');
};
