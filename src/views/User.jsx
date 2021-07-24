import '../assets/css/user.scss'
import {useSelector} from "react-redux";
import {Login} from "./Login";

export const User = () => {
    const isLogin = useSelector(state => state.loginReducer.isLogin)
    return isLogin ? (
        <div className="info-user mt-5">
            <div className="container">
                <div className="row row-align">
                    <div className="col-lg-6">
                        <div className="image">
                            <img className="shadow"
                                 src="https://i.pinimg.com/originals/03/3d/c7/033dc762955108c7212e719b158f475c.gif"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="info">
                            <h1>Trinh hung</h1>
                            <h2 className="my-3">Front end developer / web designer / graphic design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aperiam
                                asperiores aspernatur consectetur cum deleniti dolore doloremque et explicabo fugit id
                                illo in ipsam laborum, modi mollitia nam neque nihil nobis officiis pariatur possimus
                                quae qui quidem quos sapiente voluptate? Ab maxime, rerum? Deleniti doloremque facere
                                illum quae voluptas.</p>
                            <h3 className="mt-3">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-google-plus-square"></i>
                                <i className="fab fa-github-square"></i>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-primary fs-2 mt-5">
                            skills
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="box-custom">
                            <div className="item">
                                <div className="skill mt-4">
                                    <h1>HTML / CSS</h1>
                                    <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aliquid
                                        consectetur eum illum
                                        odit optio recusandae?</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             style={{width: 95 + '%'}}>95%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="skill mt-4">
                                    <h1>Javascript</h1>
                                    <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aliquid
                                        consectetur eum illum
                                        odit optio recusandae?</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             style={{width: 70 + '%'}}>70%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="skill mt-4">
                                    <h1>React / Vue</h1>
                                    <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aliquid
                                        consectetur eum illum
                                        odit optio recusandae?</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             style={{width: 65 + '%'}}>65%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="skill mt-4">
                                    <h1>Sass / Bootstrap / GitHub</h1>
                                    <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aliquid
                                        consectetur eum illum
                                        odit optio recusandae?</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             style={{width: 80 + '%'}}>80%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="title-primary fs-2 mt-5">
                                    Study process
                                </div>
                                <div className="process mt-4">
                                    <div className="item">
                                        <h6>2012 - 2016</h6>
                                        <h1 className="my-2">FPT University</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
                                            consequuntur dicta distinctio dolores doloribus ea exercitationem id illum,
                                            iste maxime modi non possimus ratione saepe similique tempore totam ut.</p>
                                        <ul className="mt-2">
                                            <li>Front End Developer</li>
                                            <li>Graphic Design</li>
                                            <li>Web Designer</li>
                                            <li>Vovinam</li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <h6>2012 - 2016</h6>
                                        <h1 className="my-2">FPT University</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
                                            consequuntur dicta distinctio dolores doloribus ea exercitationem id illum,
                                            iste maxime modi non possimus ratione saepe similique tempore totam ut.</p>
                                        <ul className="mt-2">
                                            <li>Front End Developer</li>
                                            <li>Graphic Design</li>
                                            <li>Web Designer</li>
                                            <li>Vovinam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="title-primary fs-2 mt-5">
                                    work experience
                                </div>
                                <div className="process mt-4">
                                    <div className="item">
                                        <h6>2012 - 2016</h6>
                                        <h1 className="my-2">FPT University</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
                                            consequuntur dicta distinctio dolores doloribus ea exercitationem id illum,
                                            iste maxime modi non possimus ratione saepe similique tempore totam ut.</p>
                                        <ul className="mt-2">
                                            <li>Front End Developer</li>
                                            <li>Graphic Design</li>
                                            <li>Web Designer</li>
                                            <li>Vovinam</li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <h6>2012 - 2016</h6>
                                        <h1 className="my-2">FPT University</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
                                            consequuntur dicta distinctio dolores doloribus ea exercitationem id illum,
                                            iste maxime modi non possimus ratione saepe similique tempore totam ut.</p>
                                        <ul className="mt-2">
                                            <li>Front End Developer</li>
                                            <li>Graphic Design</li>
                                            <li>Web Designer</li>
                                            <li>Vovinam</li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <h6>2012 - 2016</h6>
                                        <h1 className="my-2">FPT University</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem
                                            consequuntur dicta distinctio dolores doloribus ea exercitationem id illum,
                                            iste maxime modi non possimus ratione saepe similique tempore totam ut.</p>
                                        <ul className="mt-2">
                                            <li>Front End Developer</li>
                                            <li>Graphic Design</li>
                                            <li>Web Designer</li>
                                            <li>Vovinam</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Login/>
    )
}