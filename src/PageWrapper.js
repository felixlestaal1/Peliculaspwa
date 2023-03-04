import Header from './components/Headher';

export default function PageWrapper(props) {
    return (
        <div>
          <div id="preloader">
        <img className="logo" src="images/logo1.png" alt="" width="119" height="58"/>
        <div id="status">
            <span></span>
            <span></span>
        </div>
    </div>
    
    <div className="login-wrapper" id="login-content">
        <div className="login-content">
            <a href="#" className="close">x</a>
            <h3>Login</h3>
            <form method="post" action="#">
                <div className="row">
                     <label for="username">
                        Username:
                        <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                    </label>
                </div>
               
                <div className="row">
                    <label for="password">
                        Password:
                        <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                    </label>
                </div>
                <div className="row">
                    <div className="remember">
                        <div>
                            <input type="checkbox" name="remember" value="Remember me"/><span>Remember me</span>
                        </div>
                        <a href="#">Forget password ?</a>
                    </div>
                </div>
               <div className="row">
                    <button type="submit">Login</button>
               </div>
            </form>
            <div className="row">
                <p>Or via social</p>
                <div className="social-btn-2">
                    <a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
                    <a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
                </div>
            </div>
        </div>
    </div>
    
    <div className="login-wrapper"  id="signup-content">
        <div className="login-content">
            <a href="#" className="close">x</a>
            <h3>sign up</h3>
            <form method="post" action="#">
                <div className="row">
                     <label for="username-2">
                        Username:
                        <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                    </label>
                </div>
               
                <div className="row">
                    <label for="email-2">
                        your email:
                        <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                    </label>
                </div>
                 <div className="row">
                    <label for="password-2">
                        Password:
                        <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                    </label>
                </div>
                 <div className="row">
                    <label for="repassword-2">
                        re-type Password:
                        <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                    </label>
                </div>
               <div className="row">
                 <button type="submit">sign up</button>
               </div>
            </form>
        </div>
    </div>
    
        <Header/>
   
    
    
    <div className="hero common-hero">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="hero-ct">
                        <h1> movie listing - list</h1>
                        <ul className="breadcumb">
                            <li className="active"><a href="#">Home</a></li>
                            <li> <span className="ion-ios-arrow-right"></span> movie listing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="page-single movie_list">
        <div className="container">
            <div className="row ipad-width2">
                <div className="col-md-8 col-sm-12 col-xs-12">
                    <div className="topbar-filter">
                        <p>Found <span>1,608 movies</span> in total</p>
                        <label>Sort by:</label>
                        <select>
                            <option value="popularity">Popularity Descending</option>
                            <option value="popularity">Popularity Ascending</option>
                            <option value="rating">Rating Descending</option>
                            <option value="rating">Rating Ascending</option>
                            <option value="date">Release date Descending</option>
                            <option value="date">Release date Ascending</option>
                        </select>
                        <a href="movielist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
                        <a  href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
                    </div>

                    {props.children}
 
                    
                </div>
               
            </div>
        </div>
    </div>
    <footer className="ht-footer">
        <div className="container">
            <div className="flex-parent-ft">
                <div className="flex-child-ft item1">
                     <a href="index-2.html"><img className="logo" src="images/logo1.png" alt=""/></a>
                     <p>5th Avenue st, manhattan<br/>
                    New York, NY 10001</p>
                    <p>Call us: <a href="#">(+01) 202 342 6789</a></p>
                </div>
                <div className="flex-child-ft item2">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">About</a></li> 
                        <li><a href="#">Blockbuster</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
                <div className="flex-child-ft item3">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Terms of Use</a></li> 
                        <li><a href="#">Privacy Policy</a></li>	
                        <li><a href="#">Security</a></li>
                    </ul>
                </div>
                <div className="flex-child-ft item4">
                    <h4>Account</h4>
                    <ul>
                        <li><a href="#">My Account</a></li> 
                        <li><a href="#">Watchlist</a></li>	
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">User Guide</a></li>
                    </ul>
                </div>
                <div className="flex-child-ft item5">
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter system now <br/> to get latest news from us.</p>
                    <form action="#">
                        <input type="text" placeholder="Enter your email..."/>
                    </form>
                    <a href="#" className="btn">Subscribe now <i className="ion-ios-arrow-forward"></i></a>
                </div>
            </div>
        </div>
        <div className="ft-copyright">
            <div className="ft-left">
                <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
            </div>
            <div className="backtotop">
                <p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
            </div>
        </div>
    </footer>
        </div>
      );
    }

