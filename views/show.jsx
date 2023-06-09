const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>

        <p> 
            {
                bread.hasGluten 
                ? <span> Does </span>
                : <span> Does NOT </span>
            }
            have Gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <p>Baked by {bread.getBakedBy()}</p>
        <br />
        <br />
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
        <br />
        <br />

        <form action={`/breads/${bread.id}?_method=DELETE`} method = "POST">
            <input type="submit" value = "DELETE"/>
        </form>

        
        <br />
        <br />
        <a href="/breads">Return</a>
       
      </Default>
    )
}

module.exports = Show
