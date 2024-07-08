import { useTheme } from "styled-components";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const theme = useTheme()
  
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className={theme.tag === 'light' ? 'desc text-left max-w-md text-gray-600' : "desc text-left max-w-md text-gray-400"}>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
