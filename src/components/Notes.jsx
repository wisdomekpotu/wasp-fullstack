import { getNotes, useQuery, deleteNote } from 'wasp/client/operations';

export default function Notes() {
  const { data: notes, isLoading, error } = useQuery(getNotes);
  return (
    <div className='container px-0 py-0 mx-auto'>
      {notes && <Note notes={notes} />}
      {isLoading && 'Loading...'}
      {error && 'Error: ' + error}
    </div>
  );
}

export function Note({ notes }) {
  if (!notes?.length) return <div>No Note Found</div>;

  const removeNote = (id) => {
    if (!window.confirm('Are you sure?')) return;

    try {
      // Call the `deleteNote` operation with this note's ID as its argument
      deleteNote({ id })
        .then(() => console.log(`Deleted note ${id}`))
        .catch((err) => {
          throw new Error('Error deleting note: ' + err);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='flex flex-wrap -m-4 py-6'>
      {notes.map((note, idx) => (
        <div className='p-4 md:w-1/3' note={note} key={idx}>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
            <div className='p-6'>
              <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                {note.title}
              </h1>
              <p className='leading-relaxed mb-3'>{note.description}</p>
              <div className='flex items-center flex-wrap '>
                <a
                  className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  onClick={() => removeNote(note.id)}
                >
                  Delete note
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
