import classnames from "classnames";

export default function SkillCard({ nama, level, image, imageClassName }) {
  const addImageClassName = imageClassName ? `${imageClassName}` : "";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center">
      <img src={image} className={classnames("mr-6", addImageClassName)} />
      <div>
        <h4 className="text-lg font-semibold dark:text-white">{nama}</h4>
        <p className="text-sm text-gray-400">{level}</p>
      </div>
    </div>
  );
}
