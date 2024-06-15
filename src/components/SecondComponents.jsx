

export const SecondComponents = () => {

  let customCss="error"
  const isloggedin="true"
  const userWelcome= isloggedin ? <p>Welcome back!!</p> : <p>Please logged in.</p>
  let listItems=["item1","item2","item3","item4"]
  return (
    <>
    <h1 className="firstText">Sundar</h1>
    <p className="secondText">Learn to be smart</p>


    {/* js expression in jsx */}

    <p className={customCss}>50+50={50+50}</p>

    {/*js conditional rendering in jsx */}

    {userWelcome}

    {/* js list in jsx */}

    <ul>
      {listItems.map((item,index)=>(

          <li key={index}>{item}</li>
  
      ))}
    </ul>
    </>
  )
}
