document.getElementById('download-btn') 
        .addEventListener('click', () => { 
            const element = document.getElementById('resume');
            element.style.width = '2550px' 
            const options = { 
                filename: 'michael-uchytil-resume.pdf', 
                margin: 0, 
                image: { type: 'jpeg', quality: 0.98 }, 
                html2canvas: { scale: 1 }, 
                jsPDF: {  
                    unit: 'in',  
                    format: 'letter',  
                    orientation: 'portrait'  
                } 
            }; 
            html2pdf().set(options).from(element).save();
            element.style.width = ''; 
        }); 