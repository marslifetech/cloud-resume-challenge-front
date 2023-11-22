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

    // Get User's ip address 
    $.get('https://www.cloudflare.com/cdn-cgi/trace').then(res =>  {
        var info = res.split('\n');
        var ip = info[2].split('=')[1];
        var browser = info[5].split('=')[1].replace("(","").replace(")","").replace("\;","").split(' ');
        console.log(info);
        console.log(ip);
        console.log(browser);


        });
    
});