import PropTypes from "prop-types";

export default function ColorfulButton({ title, link }) {
  return (
    <button
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 text-xl font-bold text-black rounded-md bg-gradient-to-r from-[#a6b7d6] to-[#c38b7d] opacity-90 hover:opacity-100 inline-block text-center"
    >
      {title}
    </button>
  );
}

ColorfulButton.propTypes = {
  title: PropTypes.string.isRequired, // Title text for the button
  link: PropTypes.string.isRequired, // URL the button points to
};
