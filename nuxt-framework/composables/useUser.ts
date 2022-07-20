export default function () {
  const user = useState('user', () => ({
    nickname: "",
    email: "",
    point:0,
    profile_img:'',
  }))

  const setUser = (info:any) =>{
    user.value.nickname = info.nickname;
    user.value.email = info.email;
    user.value.point = info.point;
    user.value.profile_img = info.profile_img;
  }

  const setPoint = (point:number) => {
    user.value.point = point;
  }
  const setProfileImg = (url:string) =>{
    user.value.profile_img = url;
  }

  const initUser = () =>{
    user.value.point = 0;
    user.value.nickname = '',
    user.value.email = ''
    user.value.profile_img = ''
  }

  return {
    user,
    setUser,
    setPoint,
    initUser,
    setProfileImg
  }
}