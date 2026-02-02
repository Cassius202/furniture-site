import { useLocalStorage } from "@uidotdev/usehooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';
import { useAppProps } from "../hooks/useAppProps";

const Contact = () => {
  const {theme } = useAppProps()
  // Persist form data to localStorage
  const [formData, setFormData] = useLocalStorage("contact_form_data", {
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.dismiss();
    (Math.random() < 0.65) ? toast.success("Message sent successfully") : toast.error('Message not sent. Please try again')
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-6 bg-base-100 mb-8">
      <Toaster 
      position="top-center" 
      toastOptions={{
        // 1. Apply styles based on the theme variable
        style: {
          background: theme === 'dark' ? '#333' : '#fff',
          color: theme === 'dark' ? '#fff' : '#333',
          border: theme === 'dark' ? '1px solid #555' : '1px solid #e2e8f0',
        },
        // 2. You can also customize specific types
        success: {
          iconTheme: {
            primary: theme === 'dark' ? '#F9A01B' : '#22c55e',
            secondary: '#fff',
          },
        },
      }}
    />
      
      <div className="w-full max-w-2xl bg-base-200 shadow-xl rounded-2xl p-8 border border-slate-400 dark:border-0">
        <h2 className="text-3xl font-bold text-center text-slate-950 dark:text-primary">Get In Touch</h2>
        <p className="subtitle mb-7">Ask about the product you want</p>
        
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="text-primary w-4" /> Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered focus:input-primary w-full px-3 p-2 border rounded-lg mt-1.5 border-slate-300 transition-all text-white dark:placeholder:text-slate-400 dark:border-slate-500 "
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary w-4" /> Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="input input-bordered  w-full px-3 p-2 border rounded-lg mt-1.5 border-slate-300 transition-all text-white dark:placeholder:text-slate-400 dark:border-slate-500 "
            />
          </div>

          {/* Message Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={faMessage} className="text-primary w-4" /> Message
              </span>
            </label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the product you are looking for..."
              className="textarea textarea-bordered focus:textarea-primary w-full px-3 p-2 border rounded-lg mt-1.5 text-slate-950 border-slate-300 transition-all dark:text-white dark:border-slate-500 dark:placeholder:text-slate-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary mt-4 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform bg-primary w-max px-3 py-2 rounded-lg text-white"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;