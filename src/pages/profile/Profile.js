import React from "react";
import './profile.css';

const UserProfile = () => {
    return (
        <div className="user-account">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <aside>
                        <div className="avatar-layer">
                            <div className="img-layer">
                                <a href="" className="change-image">
                                    <i className="zmdi zmdi-edit" />
                                </a>
                                <img src="images/pic/avatar.jpg" />
                            </div>
                            <div className="detail">
                                <span> علی مسکنی </span>
                                <span> عضویت : 01/01/1401 </span>
                            </div>
                        </div>

                        <section>
                            <header>
                                <h3> میز کار </h3>
                            </header>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <a href=""> مشاهده حساب کابری </a>
                                    </li>
                                    <li>
                                        <a href=""> ویرایش حساب کابری </a>
                                    </li>
                                    <li>
                                        <a href=""> تغییر رمز عبور </a>
                                    </li>
                                    <li>
                                        <a href=""> تنظیمات حساب کاربری </a>
                                    </li>
                                    <li>
                                        <a href=""> خروج از حساب کاربری </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </aside>
                </div>
                <div className="col-md-9 col-sm-8 col-xs-12">
                    <section className="user-account-content">
                        <header>
                            <h1> داشبورد </h1>
                        </header>
                        <div className="inner">
                            <div className="account-information">
                                <h3> اطلاعات کاربری </h3>
                                <ul>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-account" />{" "}
                                        نام و نام خانوادگی : علی مسکنی{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-assignment-account" />{" "}
                                        نام کاربری : ali.gh{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-email" />{" "}
                                        ایمیل : ali@gmail.com{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-calendar-check" />{" "}
                                        تاریخ عضویت : 01/01/1401{" "}
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="zmdi zmdi-smartphone-android" />{" "}
                                        شماره تماس : 0912000000{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
