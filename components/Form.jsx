import Link from "next/link";
import { useTheme } from "styled-components";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const theme = useTheme()

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className={theme.tag === 'light' ? 'desc text-left max-w-md text-gray-600' : "desc text-left max-w-md text-gray-400"}>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className={ theme.tag === 'light' ? 'mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism border-gray-200 bg-white/20' : 'mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism border-gray-800 bg-black/20'}
      >
        <label>
          <span className={theme.tag === 'light' ? 'font-satoshi font-semibold text-base text-gray-700':  'font-satoshi font-semibold text-base text-gray-300'}>
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className={theme.tag === 'light' ? 'form_textarea bg-white':'form_textarea bg-black'}
          />
        </label>

        <label>
          <span className={theme.tag === 'light' ? 'font-satoshi font-semibold text-base text-gray-700':  'font-satoshi font-semibold text-base text-gray-300'}>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className={theme.tag === 'light' ? 'form_input bg-white':'form_input bg-black'}
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
