const React = require('react')
const Default = require('./layouts/Default')

function New ({bakers}) {
    return (
      <Default>
        <h2>New Bread Page</h2>

        <form action = "/breads" method = "POST">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required/>
          <br></br>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image"/>
          <br></br>
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker">
            {
              bakers.map((baker)=> {
                return(
                  <option value={baker.id} key = {baker.id}>{baker.name}</option>
                )
              })
            }
         
            
          </select>
          <br></br>
          <label htmlFor="hasGluten">Has Gluten?</label>

          <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked/>
          <br />
          <input type="submit"/>
        </form>

        <div className = 'homeButton'>
            <a href="/breads">
                <button>Back Home</button>
            </a>
        </div>
      </Default>
    )
}

module.exports = New

