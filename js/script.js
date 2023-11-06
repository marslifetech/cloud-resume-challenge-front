$(document).ready(()=>{
    // $('#download-btn').on('click',()=>{
        
    //     $('html').addClass('print');
    //     const { jsPDF } = window.jspdf; 
    //     const doc = new jsPDF('l','in');
    //     let pdfjs = document.querySelector('#resume-intro');
    //     doc.html(pdfjs,{
    //         callback: function(doc){
    //             doc.save('resume.pdf');
    //         },
    //         x:50,
    //         y:50
    //     });
    //     $('html').removeClass('print');
    // });

    $('#download-btn').on('click',()=>{
        window.print();
    });

    
});