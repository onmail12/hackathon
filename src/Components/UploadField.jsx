import { FileImage } from "react-bootstrap-icons";

const UploadField = ({ file, setFile }) => {
  return (
    <div className="flex items-center justify-center w-full ">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-3 border-[#004225] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div
          className={`${
            file ? "hidden" : ""
          } flex flex-col items-center justify-center pt-5 pb-6`}
        >
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Klik untuk upload</span> foto limbah{" "}
            <span className="text-red-600">*</span>
          </p>
        </div>

        {file ? (
          <div className="flex flex-col items-center font-normal text-gray-500">
            <FileImage />
            {file.name}
            <span className="font-bold"> Uploaded </span>
            Klik untuk pilih file lain
          </div>
        ) : (
          ""
        )}

        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          name="picture"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </label>
    </div>
  );
};

export default UploadField;
