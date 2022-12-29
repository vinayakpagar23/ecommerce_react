import styled from "styled-components";
import Footer from "./components/Footer";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
       <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.4272300099974!2d73.75993531474505!3d19.990576086569764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec72148ffffb%3A0x2aadafb6c7967179!2sNashik%20City%20Centre%20Mall!5e0!3m2!1sen!2sin!4v1672308876396!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
         <div className="contact-form">
          <form action="https://formspree.io/f/xknawlqk" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off" />
            <input type="email" name="Email" placeholder="Email" required autoComplete="off" />
            <textarea name="Message" id="" cols="30" rows="10" placeholder="Enter your message" required autoComplete="off"></textarea>
            <input type="submit" value="send"/>
          </form>
         </div>
      </div>
      
    </Wrapper>
  );
};

export default Contact;
