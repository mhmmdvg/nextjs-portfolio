import classnames from "classnames";

export default function ProjectItems({ nama, description, image, className }) {

  return (
    <article className="text-center">
      <img src={image} className={classnames("rounded-lg w-full", className)} />
      <h3 className="dark:text-white text-xl font-semibold mt-4 mb-1">{nama}</h3>
      <p className="text-gray-400 text-base">{description}</p>
    </article>
  );
}
