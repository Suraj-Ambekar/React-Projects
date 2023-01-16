import "./Main.css";
import { Inputs, Justifycontent, Aligncontent, Alignitems, Alignself, Flexgrow, Flexshrink, Flexwrap, Flexbasis, Flex, Flexflow, Placecontent} from "./Inputs";




function Main(){



    // const codesRef = useRef([]);
    // const flexRef = useRef([]);
    // function handleClick() {
    //     codesRef.current.forEach(input => input.style.color = "pink");
    // }

    // inputs.forEach((input) => {
    //     input.addEventListener("focus", () => {
    //       star.style.cssText = input.textContent;
    //     });
      
    //     input.addEventListener("input", () => {
    //       star.style.cssText = input.textContent;
    //     });
    //   });

    // function handleClick() {
    //     codes.current.forEach(element => {
    //     //   element.current.style.color = "green";
    //     element.focus();
    //     });
    // }
    

    // codes.current.style.color = "pink";
    // con.current.style.backgroundColor = "blue";
    // con.current.style.color = "white";

    return(
        <main className="main">
            <div className="container">
                <div className="content">
                    <div className="content-first-section">
                        <div className="content-cover-img">
                            {/* <img src="./flexbox.jpg" alt="cover img" /> */}
                        </div>
                        <div className="content-main">
                            <div className="content-info">
                                <button>
                                    <i class="fa-solid fa-newspaper"></i>
                                    <span>Blog</span>
                                </button>
                                <p>9 December, 2022 - 10 min read</p>
                                <div className="content-social-icons">
                                    <div className="social-icon">
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="social-icon">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="social-icon">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div className="social-iconss">
                                        <i class="fa-solid fa-link"></i>
                                    </div>
                                    <div className="social-iconss">
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading">
                                <h1>Introduction to CSS Flexbox</h1>
                            </div>
                            <div className="contributors">
                                <div className="contributors-pic">
                                    <span>Contributors</span>
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><img src="./ProfilePic.jpg" alt="contributors pic" /></a>
                                </div>
                                <div className="like">
                                    <div className="likes">
                                        <i class="fa-solid fa-heart"></i><span>50K</span>
                                    </div>
                                    <div className="comments">
                                        <i class="fa-solid fa-comment-dots"></i><span></span>
                                    </div>
                                    <div className="bookmark">
                                        <i class="fa-solid fa-bookmark"></i>
                                    </div>
                                </div>
                            </div>





                            {/* <div className="interactive-mode">
                                <div className="interactive-heading">
                                    <h3 className="heading">CSS Demo: background-position</h3>
                                    <button type="button" className="reset-btn">RESET</button>
                                </div>
                                <div className="interactive-code">
                                    <code className="codes" ref={el => codesRef.current.push(el)} contenteditable="true">
                                        flex-direction: row;
                                    </code>
                                    <code className="codes" ref={el => codesRef.current.push(el)} contenteditable="true">
                                        flex-direction: row-reverse;
                                    </code>
                                    <code className="codes" ref={el => codesRef.current.push(el)} contenteditable="true">
                                        flex-direction: column;
                                    </code>
                                    <code className="codes" ref={el => codesRef.current.push(el)} contenteditable="true">
                                        flex-direction: column-reverse;
                                    </code>
                                </div>
                                <div className="interactive-op">
                                    <div className="codes-op" ref={flexRef}>
                                        <div className="flex" onClick={handleClick}>1</div>
                                        <div className="flex">2</div>
                                        <div className="flex">3</div>
                                        <div className="flex">4</div>
                                    </div>
                                </div>
                                <div className="interactive-heading">
                                    <h3 className="heading">CSS Demo: background-position</h3>
                                    <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
                                </div>
                                <div className="interactive-code">
                                    <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} contenteditable="true">
                                        flex-direction: row;
                                    </code>
                                    <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} contenteditable="true">
                                        flex-direction: row-reverse;
                                    </code>
                                    <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} contenteditable="true">
                                        flex-direction: column;
                                    </code>
                                    <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} contenteditable="true">
                                        flex-direction: column-reverse;
                                    </code>
                                </div>
                                <div className="interactive-op">
                                    <div className="codes-op" ref={starRef}>
                                        <div className="flex" onClick={handleClick}>1</div>
                                        <div className="flex">2</div>
                                        <div className="flex">3</div>
                                        <div className="flex">4</div>
                                    </div>
                                </div>
                            </div> */}
                            < Inputs />
                            {/* {Inputs()} */}




                            <div className="table-of-content">
                                <h3>Table of Contents</h3>
                                <div>
                                    <h5>First, What is Flexbox?</h5>
                                    <h5>Flexbox Architecture</h5>
                                    <h5>Flexbox Chart</h5>
                                    <h5>How to Set Up the Project</h5>
                                    {/* <h5>a. HTML</h5>
                                    <h5>b. CSS</h5> */}
                                    <h5>But Wait.....</h5>
                                    <h5>1. flex-direction property</h5>
                                    <h5>2. justify-content property</h5>
                                    <h5>3. align-content property</h5>
                                    <h5>4. align-items property</h5>
                                    <h5>5. align-self property</h5>
                                    <h5>6. flex - grow | shrink | wrap | basis properties</h5>
                                    {/* <h5>a. flex-grow</h5>
                                    <h5>b. flex-shrink</h5>
                                    <h5>c. flex-wrap</h5>
                                    <h5>d. flex-basis</h5> */}
                                    <h5>Shorthand Flexbox Properties</h5>
                                    {/* <h5>a. flex shorthand</h5>
                                    <h5>b. flex-flow</h5>
                                    <h5>c. place-content</h5> */}
                                    <h5>More Resources</h5>
                                    <h5>Conclusion</h5>
                                </div>
                            </div>

                            <div className="article">
                                <p className="article-para">In this article, I'll teach you CSS Flexbox basics so you can make your own responsive sites. I'll explain how each of Flexbox's properties work, and I'll give you a cheatsheet that covers everything you can do with Flexbox. Let's Go 🎖️</p>
                                <h2 className="article-h2">First, What is Flexbox?</h2>
                                <img src="./articleImages/whatisflexbox.png" alt="what is flexbox" className="article-img" />
                                <p className="article-para">When you're building a house, you need a blueprint. In the same way, we need a blueprint when we're making websites. And Flexbox is the blueprint.</p>
                                {/* <p className="article-para"></p> */}
                                <p className="article-para">The Flexbox model allows us to layout the content of our website. Not only that, it helps us create the structures needed for creating responsive websites for multiple devices.</p>
                                <p className="article-para">Here's a demo of one project using Flexbox as the main blueprint.</p>
                                <img src="./articleImages/projectDemo.jpg" alt="what is flexbox" className="article-img" />
                                <h2 className="article-h2">Flexbox Architecture</h2>    
                                <p className="article-para">So how does Flexbox architecture work? The flex-items [Contents] are distributed along the main axis and cross axis. And, depending on the flex-direction property, the layout position changes between rows and columns.</p>
                                <img src="./articleImages/flexboxArchitecture.png" alt="what is flexbox" className="article-img" />
                                <h2 className="article-h2">Flexbox Chart</h2>
                                <p className="article-para">This chart contains every possible property and value you can use when you're working with Flexbox. You can reference it while doing your projects and experiment with different values.</p>
                                <img src="./articleImages/flexboxChart.png" alt="what is flexbox" className="article-img" />
                                <h2 className="article-h2">How to Set Up the Project</h2>
                                <img src="./articleImages/letsCode.png" alt="" className="article-img" />
                                <p className="article-para">For this project, you need to know little bit of HTML, CSS, and how to work with VS code. Follow along with me as we complete the following tasks:</p>
                                <p className="article-para">1. Create a folder named "Project-1" & Open VS Code</p>
                                <p className="article-para">2. Create <span className="code-bg">index.html</span> and <span className="code-bg">style.css</span> files</p>
                                <p className="article-para">3. Install Live Server and run it.</p>
                                <p className="article-para">Or, you can just open Codepen and start coding.</p>
                                <p className="article-para">At the end of this tutorial, you will be able to make accurate and beautiful website layouts.</p>
                                <h2 className="article-h2">a. HTML</h2>
                                <p className="article-para">In HTML, write these lines of code inside the body tag 👇</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/first.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                <h2 className="article-h2">b. CSS</h2>
                                <p className="article-para">Target the <span className="code-bg">.container</span> class and all the boxes. Then style the boxes so that all of them look similar, like this: 👇</p>
                                <p className="article-para"><span className="note">Note:</span> don't forget to put the height of the container.</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/seconds.jpg" alt="" className="snippet-img sec" />
                                    </div>
                                </div>
                                <h2 className="article-h2">But Wait.....</h2>
                                <img src="./articleImages/wait.png" alt="" className="article-img" />
                                <p className="article-para">Before starting, you need to understand the relationship between parent and child classes.</p>
                                <img src="./articleImages/relationship.png" alt="" className="article-img" />
                                <p className="article-para">Flexbox works on the <span className="bold">parent class</span>, not on the child classes.</p>
                                <p className="article-para">Here, the <span className="code-bg">.container</span> class is the <span className="bold">parent</span> and our <span className="code-bg">.box-*</span> classes are our <span className="bold">children</span>.</p>
                                <p className="article-para">So, apply the display: flex inside the <span className="code-bg">.container</span> class. And place the letters at the center of the box like this:</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/third.jpg" alt="" className="snippet-img thi" />
                                    </div>
                                </div>
                                <p className="article-para">And...we're all set! Let's start coding. 😊</p>
                                <img src="./articleImages/coffee.png" alt="" className="article-img" />
                                <h2 className="article-h2">1. flex-direction property</h2>
                                <p className="article-para">This property allows us to set the direction and orientation in which our flex-items should be distributed inside the flex-container.</p>
                                <img src="./articleImages/flexdrow.png" alt="" className="article-img" />
                                <img src="./articleImages/flexdcol.png" alt="" className="article-img" />
                                <p className="article-para">To recreate these results, let's write these lines in our CSS:</p>
                                <p className="article-para"><span className="note">Please note</span> that we'll write them inside the <span className="code-bg">.container</span> class.</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/fourth.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Inputs />
                                <h2 className="article-h2">2. justify-content property</h2>
                                <p className="article-para">This property arranges flex-items along the <span className="bold">MAIN AXIS</span> inside the flex-container.</p>
                                <img src="./articleImages/jc.png" alt="jc" className="article-img" />
                                <img src="./articleImages/jc1.png" alt="jc1" className="article-img" />
                                <p className="article-para">To recreate these results, write these lines in your CSS:</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/fifth.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Justifycontent />
                                <h2 className="article-h2">3. align-content property</h2>
                                <p className="article-para">This property arranges flex-items along the <span className="bold">CROSS AXIS</span> inside the flex-container. This is similar to <span className="bold">justify-content</span>.</p>
                                <img src="./articleImages/ac.png" alt="ac" className="article-img" />
                                <img src="./articleImages/ac1.png" alt="ac1" className="article-img" />
                                <p className="article-para">Please note that without the <span className="bold">flex-wrap</span> property, this property doesn't work. Here's a demo:</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/sixth.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Aligncontent />
                                <h2 className="article-h2">4. align-items property</h2>
                                <p className="article-para">This property distributes Flex-items along the <span className="bold">Cross Axis.</span></p>
                                <img src="./articleImages/ai.png" alt="ai" className="article-img" />
                                <p className="article-para">To recreate these results, let's write the following code in CSS:</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/seventh.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Alignitems />
                                <h2 className="article-h2">5. align-self property</h2>
                                <p className="article-para">This property works on the child classes. It positions the selected item along the <span className="bold">Cross Axis.</span></p>
                                <img src="./articleImages/as.png" alt="as" className="article-img" />
                                <p className="article-para">In total we have 6 values:</p>
                                <p className="article-para">flex-start</p>
                                <p className="article-para">flex-end</p>
                                <p className="article-para">center</p>
                                <p className="article-para">baseline</p>
                                <p className="article-para">stretch</p>
                                <p className="article-para">auto</p>
                                <p className="article-para">To recreate the results, select any <span className="code-bg">.box-*</span> and write the following code:</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/eighth.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Alignself />
                                <h2 className="article-h2">Take a Break</h2>
                                <p className="article-para">So far so good. Take a break!</p>
                                <img src="./articleImages/brk.png" alt="brk" className="article-img" />
                                <h2 className="article-h2">6. flex - grow | shrink | wrap | basis properties</h2>
                                <p className="article-para">The properties we'll discuss now will work when we resize the window. Let's dive right in.</p>
                                <h3 className="article-h3">a. flex grow</h3>
                                <p className="article-para">This property grows the size of a flex-item based on the width of the flex-container.</p>
                                <h3 className="article-h3">b. flex-shrink</h3>
                                <p className="article-para">This property helps a flex item shrink based on the width of the flex-container. It's the opposite of flex-grow.</p>
                                <img src="./articleImages/fgs.png" alt="fgs" className="article-img" />
                                <p className="article-para">To achieve these results, follow me.</p>
                                <p className="article-para"><span className="note">Please note</span> that flex-grow and flex-shrink work on child classes. So, we will target all our boxes like this:</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/ninth.jpg" alt="" className="snippet-img nin" />
                                    </div>
                                </div>
                                < Flexgrow />
                                <p className="article-para">Resize the window and you'll see the results.</p>
                                <p className="article-para">To duplicate the result of flex-shrink, write the following code:</p>
                                <p className="article-para"><span className="note">Please note</span> that you need to delete the flex-wrap property first, otherwise it won't work.</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/tenth.jpg" alt="" className="snippet-img ten" />
                                    </div>
                                </div>
                                < Flexshrink />
                                <p className="article-para">Now, resize the window and you'll see the results.</p>
                                <h3 className="article-h3">c. flex-wrap</h3>
                                <p className="article-para">This property helps you set the number of flex-items you want in a line or row.</p>
                                <img src="./articleImages/fw.png" alt="fw" className="article-img" />
                                <p className="article-para">This works on the .container parent class. So, write the following code:</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/eleven.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Flexwrap />
                                <h3 className="article-h3">d. flex-basis</h3>
                                <p className="article-para">This is similar to adding width to a flex-item, but only more flexible. flex-basis: 10em, for example, will set the initial size of a flex-item to 10em. Its final size will be based on the available space, flex-grow, and flex-shrink.</p>
                                < Flexbasis />
                                <h2 className="article-h2">7. Shorthand Flexbox Properties</h2>
                                <p className="article-para">Time to Investigate Flexbox Shorthands</p>
                                <h3 className="article-h3">a. flex</h3>
                                <p className="article-para">This is the shorthand for the <span className="bold">flex-grow</span>, <span className="bold">flex-shrink</span> and <span className="bold">flex-basis</span> properties combined.</p>
                                <img src="./articleImages/fs.png" alt="fs" className="article-img" />              
                                <p className="article-para">You can try this by writing the following code:</p>
                                <p className="article-para"><span className="note">Please note</span> that it only works on the child classes:</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/twelve.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Flex />
                                <h3 className="article-h3">b. flex-flow</h3>
                                <p className="article-para">This is the shorthand for the <span className="bold">flex-direction</span> and <span className="bold">flex-wrap</span> properties:</p>
                                <img src="./articleImages/ff.png" alt="ff" className="article-img" />              
                                <p className="article-para">You can try this by writing the following code:</p>
                                <p className="article-para"><span className="note">Please note</span> that it only works on the parent class.</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/fourthteen.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Flexflow />
                                <h3 className="article-h3">c. place-content</h3>
                                <p className="article-para">This is the shorthand for the justify-content and align-content properties:</p>
                                <img src="./articleImages/pc.png" alt="pc" className="article-img" />              
                                <p className="article-para">Let's duplicate the results:</p>
                                <p className="article-para"><span className="note">Please note</span> that it works on the parent class.</p>
                                <div className="code-snippet">
                                    <div className="snippet-fsection">
                                        <div className="fdiv">
                                            <i class="fa-sharp fa-solid fa-maximize"></i>
                                            <div>
                                                <span>Expand</span>
                                                <i class="fa-solid fa-angle-down"></i>
                                            </div>                                            
                                        </div>
                                        <div className="sdiv">
                                            <div>
                                                <span>Wrap</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div> 
                                            <div>
                                                <span>Lines</span>
                                                <i class="fa-regular fa-square"></i>
                                            </div>
                                            <div>
                                                <span>HTML</span>
                                                <i class="fa-solid fa-angle-down gray"></i>
                                            </div>
                                            <i class="fa-regular fa-copy"></i>
                                        </div>
                                    </div>
                                    <div className="snippet-ssection">
                                        <img src="./articleImages/codesnippet/fifthteen.jpg" alt="" className="snippet-img" />
                                    </div>
                                </div>
                                < Placecontent />
                                <h2 className="article-h2">More Resources</h2>
                                <p className="article-para">If you want to <span className="bold">exercise</span> your Flexbox knowledge, you can read this article of mine where you'll be <span className="bold">building five responsive layouts using Flexbox</span>. Here's a demo:</p>
                                <img src="./articleImages/demo.png" alt="demo" className="article-img" />
                                <h2 className="article-h2">Conclusion</h2>
                                <p className="article-para">Here's your medal for reading till the end ❤️</p>                                
                            </div>









                            <div className="tags-name">
                                <span className="tag-names">letslearntogether</span>
                                <span className="tag-names">mern</span>
                                <span className="tag-names">365daysofcontent</span>
                                <span className="tag-names">css</span>
                                <span className="tag-names">flexbox</span>
                                {/* <span className="tag-name"></span> */}
                            </div>
                            <div className="like">
                                <div className="likes">
                                    <i class="fa-solid fa-heart"></i><span>50K</span>
                                </div>
                                <div className="comments">
                                    <i class="fa-solid fa-comment-dots"></i><span></span>
                                </div>
                                <div className="bookmark">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                            </div>
                            <div className="hr-line"></div>
                            <div className="comment-profile-view">
                                <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer">
                                    <img src="./ProfilePic.jpg" alt="profile"/>
                                </a>
                                <div className="comment-profile-view-div">
                                    <div>
                                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h4 className="name">Suraj Ambekar</h4></a>
                                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h5 className="u-name">@surajambekar</h5></a>
                                    </div>
                                    <h5 className="u-name">Mumbai, India</h5>
                                    <p className="para">I am a MERN Stack Developer and I love to code.</p>
                                </div>
                            </div>
                            <div className="comment-section">
                                <h3 className="discussion">Discussion</h3>
                                <div className="comment-box">
                                    <textarea placeholder="Write something nice"></textarea>
                                    <div className="styling">
                                        <div className="style-icons">
                                            <div className="icons">
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-h"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-b"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-italic"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-quote-left"></i>  
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-code"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-link"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-list-ul"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-list-ol"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-image"></i>
                                                </div>
                                            </div>
                                            <div className="style-btns">
                                                <div className="style-btn write">
                                                    <i class="fa-sharp fa-solid fa-pen"></i>
                                                    <span className="write">Write</span>
                                                </div>
                                                <div className="style-btn">
                                                    <i class="fa-solid fa-eye"></i>
                                                    <span className="preview">Preview</span>
                                                </div>
                                                <button className="style-btn send-btn">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="last-section">
                                <div><h3>More Shows</h3></div>
                                <div className="shows-list">
                                    <div className="listed-show">
                                        <div className="listed-show-img">
                                            <img src="https://project-assets.showwcase.com/300x/49986/1670583348584-response.jpg?type=webp" alt="intro pic" />
                                        </div>
                                        <div className="listed-show-content">
                                            <div className="div">
                                                <i class="fa-solid fa-newspaper"></i>
                                                <span>Blog</span>
                                            </div>
                                            <h3><a href="https://www.showwcase.com/show/19194/how-to-create-a-responsive-website">How to create a Responsive Website</a></h3>
                                            <p>Exaplaination about how to create a responsive website</p>
                                            <div className="pc">
                                                <img src="ProfilePic.jpg" alt="picc" />
                                                <p>Suraj - 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listed-show">
                                            <div className="listed-show-img">
                                                <img src="https://project-assets.showwcase.com/300x/49986/1670028714669-web.jpg?type=webp" alt="intro pic" />
                                            </div>
                                            <div className="listed-show-content">
                                                <div className="div">
                                                    <i class="fa-solid fa-newspaper"></i>
                                                    <span>Blog</span>
                                                </div>
                                                <h3><a href="https://www.showwcase.com/show/18962/free-resources-for-your-web-development-career">Free Resources For Your Web Developement Career</a></h3>
                                                <p>Uploaded so many free resource for your web developement career</p>
                                                <div className="pc">
                                                    <img src="ProfilePic.jpg" alt="picc" />
                                                    <p>Suraj - 3 min read</p>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="listed-show">
                                        <div className="listed-show-img">
                                            <img src="https://project-assets.showwcase.com/49986/1669399632482-Team%2520of%2520tiny%2520business%2520persons%2520launching%25" alt="intro pic" />
                                        </div>
                                        <div className="listed-show-content">
                                            <div className="div">
                                                <i class="fa-solid fa-newspaper"></i>
                                                <span>Blog</span>
                                            </div>
                                            <h3><a href="https://www.showwcase.com/show/18714/12-steps-you-need-to-take-before-deploying-your-website">12 Steps You Need To Take Before Deploying ...</a></h3>
                                            <p>Explained 12 steps you nened to tak before deploying your website</p>
                                            <div className="pc">
                                                <img src="ProfilePic.jpg" alt="picc" />
                                                <p>Suraj - 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listed-show">
                                        <div className="listed-show-img">
                                            <img src="https://project-assets.showwcase.com/300x/49986/1668770804562-Front%2520End%2520Developer.jpg?type=webp" alt="intro pic" />
                                        </div>
                                        <div className="listed-show-content">
                                            <div className="div">
                                                <i class="fa-solid fa-newspaper"></i>
                                                <span>Blog</span>
                                            </div>
                                            <h3><a href="https://www.showwcase.com/show/18485/how-to-become-a-front-end-developers">How to Become a Front-End Developer?</a></h3>
                                            <p>Exaplained how we can become a Fron-Eend developer</p>
                                            <div className="pc">
                                                <img src="ProfilePic.jpg" alt="picc" />
                                                <p>Suraj - 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-sidebar">
                    <div className="intro">
                        <img src="./profilePic.jpg" alt="pic" />
                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h4 className="name">Suraj Ambekar</h4></a>
                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h5 className="u-name">@surajambekar</h5></a>
                        {/* <h4 className="name">Suraj Ambekar</h4>
                        <h5 className="u-name">@surajambekar</h5> */}
                        <p className="para">I am a MERN Stack Developer and I love to code.</p>
                    </div>
                    <div className="tags">
                        <h3>Tags</h3>
                        <div className="tags-name">
                            <span className="tag-names">letslearntogether</span>
                            <span className="tag-names">mern</span>
                            <span className="tag-names">365daysofcontent</span>
                            <span className="tag-names">css</span>
                            <span className="tag-names">flexbox</span>
                            {/* <span className="tag-name"></span> */}
                        </div>
                    </div>
                    <div className="more-shows">
                        <h3 className="p">More on Showwcase</h3>
                        <div className="shows">
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer">
                                <div className="show">
                                    <img src="./profilePic.jpg" alt="pic" />
                                    <div className="show-details">
                                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                        <h3>How to Become a Front-End Developer?</h3>
                                        <div className="views">
                                            <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><div className="show">
                                <img src="./profilePic.jpg" alt="pic" />
                                <div className="show-details">
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                    <h3>12 Steps You Need To Take Before Deploying Your Website</h3>
                                    <div className="views">
                                        <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                    </div>
                                </div>
                            </div></a>
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><div className="show">
                                <img src="./profilePic.jpg" alt="pic" />
                                <div className="show-details">
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                    <h3>Free Resources For Your Web Development Career</h3>
                                    <div className="views">
                                        <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                    </div>
                                </div>
                            </div></a>
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><div className="show">
                                <img src="./profilePic.jpg" alt="pic" />
                                <div className="show-details">
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                    <h3>How to create a Responsive Website</h3>
                                    <div className="views">
                                        <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                    </div>
                                </div>
                            </div></a>
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><div className="show">
                                <img src="./profilePic.jpg" alt="pic" />
                                <div className="show-details">
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                    <h3>Introduction to JavaScript</h3>
                                    <div className="views">
                                        <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                    </div>
                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main