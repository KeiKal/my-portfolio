const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          {' | '}
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  