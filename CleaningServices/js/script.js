

$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    // sample video popup
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

});


function sendEmail(event) {
    event.preventDefault(); // Prevent form submission
    
    const senderEmail = "jomspadonan15@gmail.com"; // Replace with your Gmail email address
    
    const recipientEmail = document.querySelector('input[name="email"]').value; // Get the recipient's email from the form
    
    const name = document.querySelector('input[name="name"]').value; // Get the name from the form
    
    const message = document.querySelector('textarea[name="message"]').value; // Get the message from the form
    
    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: "Email from website",
      text: `Name: ${name}\n\nMessage: ${message}`,
    };
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: "your-app-password", // Replace with your generated app password
      },
    });
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error);
        alert("Failed to send email. Please try again.");
      } else {
        console.log("Email sent:", info.response);
        alert("Email sent successfully!");
        document.getElementById("emailForm").reset(); // Reset the form
      }
    });
  }