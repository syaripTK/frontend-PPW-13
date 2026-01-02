const Profile = ({nama, alamat, umur}) => {
    /**
     * atau bisa juga seperti ini
     * const props = {nama, alamat, umur}
     */
  return (
    <div>
      <h3>About Me</h3>
      <ul>
        <li>Nama : {nama}</li>
        <li>Alamat : {alamat}</li>
        <li>Umur : {umur}</li>
      </ul>
    </div>
  );
};
export default Profile;
