function Account() {
  return (
    <div className=" flex flex-row justify-center sm:justify-between items-center ">

      <div className="hidden sm:flex sm:flex-col">
        <p className="text-sm"> بهروز اصغری عزیز خوش آمدید</p>
        <p className="text-sm">نقش کاربری : مدیر سیستم</p>
        <p className="text-xs"> آخرین ورود : 1399/10/11 5:10</p>
      </div>

      <div className="indicator  mt-2 sm:m-2">
        <span className="indicator-item badge badge-secondary">99+</span>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" alt="Account" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Account;
