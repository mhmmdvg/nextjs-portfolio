export default function Button({ children, mailto }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
      className="bg-purp p-2 px-4 inline-flex rounded-md transition hover:bg-opacity-90 text-white font-sans"
    >
      {children}
    </a>
  );
}
