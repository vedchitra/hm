window.addEventListener('error', function(e) {
    if (e.target.tagName && e.target.tagName.toLowerCase() === 'img') {
        // येथे तुमच्या डिफॉल्ट इमेजची लिंक द्या
        e.target.src = '/images/default-placeholder.png'; 
        
        // जर डिफॉल्ट इमेज सुद्धा लोड नाही झाली तर इन्फिनिटी लूप थांबावा म्हणून हे आवश्यक आहे:
        e.target.onerror = null; 
    }
}, true);