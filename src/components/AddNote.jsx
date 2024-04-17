import { createNote } from 'wasp/client/operations';

export default function AddNote() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const target = event.target;
      const title = target.title.value;
      const description = target.description.value;
      target.reset();
      await createNote({ title, description });
    } catch (err) {
      window.alert('Error: ' + err.message);
    }
  };
  return (
    <form className='max-w-xl mt-20 mx-auto' onSubmit={handleSubmit}>
      <div className='w-full px-3'>
        <input
          type='text'
          name='title'
          placeholder='Enter note title'
          className='focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none'
        ></input>
        <br />
        <textarea
          rows='4'
          name='description'
          placeholder='Enter note message'
          className='resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        ></textarea>
      </div>
      <div className='flex justify-between w-full px-3'>
        <div className='md:flex md:items-center'></div>
        <button
          className='shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded'
          type='submit'
        >
          Add Note
        </button>
      </div>
    </form>
  );
}
