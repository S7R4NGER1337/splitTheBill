import { sendImage } from '../api/image'

export const handleChange = async (e, setStatus, redirectTo) => {
  setStatus('loading')
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("image", file);

 const receipt = await sendImage(formData)
 setStatus('loaded')
 redirectTo(`/receipt/${receipt._id}`)
};
