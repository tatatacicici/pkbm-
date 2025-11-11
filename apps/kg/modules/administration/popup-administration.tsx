import { Button } from '@kampus-gratis/components/atoms';
import { PopupModal } from '@kampus-gratis/components/molecules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  useAdministrationStudentRole,
  useAdministrationStudentRoleModal,
} from '../../hooks/administration/hook';

export default function PopupAdministrationStudentRole() {
  const router = useRouter();

  const { setAdministrationStudentRole } = useAdministrationStudentRole();
  const {
    getAdministrationStudentRoleModal,
    setAdministrationStudentRoleModal,
  } = useAdministrationStudentRoleModal();

  return (
    <PopupModal
      lookup={getAdministrationStudentRoleModal}
      onClose={() => setAdministrationStudentRoleModal(false)}
      widthModal="w-full md:w-[50vw]"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image
          src={'/images/administration.svg'}
          width={200}
          height={200}
          alt={'administration'}
        />
        <h2 className="text-center text-2xl font-semibold mt-4">
          Administrasi
        </h2>
        <p className="text-center text-base">
          Kamu bisa memilih administrasi untuk perkuliahan atau bootcamp
        </p>
        <div className="flex flex-col gap-2 w-full mt-4">
          <Button
            type="button"
            className="bg-primary-500 py-4 w-3/4 md:w-1/2 mx-auto rounded-lg text-white font-medium"
            onClick={() => {
              setAdministrationStudentRole('REGULAR');
              setAdministrationStudentRoleModal(false);
            }}
          >
            Perkuliahan
          </Button>
          <Button
            type="button"
            className="border-2 border-primary-500 py-4 w-3/4 md:w-1/2 mx-auto rounded-lg text-primary-500 font-medium"
            onClick={() => {
              setAdministrationStudentRole('BOOTCAMP');
              setAdministrationStudentRoleModal(false);
            }}
          >
            Bootcamp
          </Button>
        </div>
      </div>
    </PopupModal>
  );
}
