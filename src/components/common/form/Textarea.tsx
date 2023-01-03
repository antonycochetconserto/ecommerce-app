import Label from './Label/label';

interface IDashboardFormInput {
  register: any;
  errors: any;
  labelTitle: string;
  value: string;
  isRequired: boolean;
}

export default function DashboardFormTextArea({
  register,
  errors,
  labelTitle,
  value,
  isRequired,
}: IDashboardFormInput) {
  return (
    <div className="relative">
      <textarea
        rows={4}
        id={value}
        className="block px-4 py-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        {...register(value, { required: isRequired })}
      ></textarea>
      <label
        htmlFor={value}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-9 peer-placeholder-shown:top-12 peer-focus:top-2 peer-focus:scale-90 font-semibold peer-focus:-translate-y-4 left-2"
      >
        {labelTitle}
      </label>
    </div>
  );
}
