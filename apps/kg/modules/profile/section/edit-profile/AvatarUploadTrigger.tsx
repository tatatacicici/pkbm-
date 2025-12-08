import { ChangeEvent } from 'react';
import { AiFillCamera } from 'react-icons/ai';

type Props = {
  onNewSelectedFile: (imageResult: string) => void;
  setEditPhoto: (value: boolean) => void;
  setFileAvatar: (value: any) => void;
};
function AvatarUploadTrigger({
  onNewSelectedFile,
  setEditPhoto,
  setFileAvatar,
}: Props) {
  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileAvatar(e.target.files[0]);
      const reader = new FileReader();
      // on load the reader.result is always an image
      reader.addEventListener('load', () => {
        onNewSelectedFile(reader.result as string);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <label
      htmlFor="avatar"
      className="cursor-pointer text-neutral-700 bg-transparent"
      onClick={() => {
        setEditPhoto(false);
      }}
    >
      <div className="grid bg-yellow-100 hover:bg-yellow-200 rounded-full shadow-md cursor-pointer w-9 h-9 place-items-center">
        <AiFillCamera className="text-xl text-yellow-500 " />
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        id="avatar"
        className="hidden"
      />
    </label>
  );
}
export default AvatarUploadTrigger;
