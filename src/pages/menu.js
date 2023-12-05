export function handleMenuClick() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.innerHTML = "";
    section.innerHTML = `
        <div class ="pizzamenu">
        <h2>Odin's Pizza Menu</h2>
        <ul>
            <li>
              <h3>Thor's Thunderous Feast</h3>
              <p>A mighty combination of pepperoni, sausage, bacon, and ham. Fit for a thunder god!</p>
            </li>
            
            <li>
              <h3>Loki's Cheesy Mischief</h3>
              <p>Extra cheese, feta, and cheddar, creating a mischievously cheesy delight that even Loki would approve.</p>
            </li>
            
            <li>
              <h3>Freyja's Garden Delight</h3>
              <p>An array of fresh vegetables including mushrooms, bell peppers, tomatoes, and olives. A vegetarian's paradise!</p>
            </li>
            
            <li>
              <h3>Bifrost BBQ Chicken</h3>
              <p>Grilled chicken, red onions, and tangy BBQ sauce, creating a flavor journey across the rainbow bridge.</p>
            </li>
            
            <li>
              <h3>Valhalla Veggie Supreme</h3>
              <p>An assortment of veggies, artichoke hearts, and sun-dried tomatoes, delivering a supreme taste of the afterlife.</p>
            </li>
            
            <li>
              <h3>Sif's Spicy Meatball Delight</h3>
              <p>Spicy meatballs, jalapeños, and red pepper flakes, adding a fiery kick to this savory masterpiece.</p>
            </li>
            
            <li>
              <h3>Frost Giant Hawaiian</h3>
              <p>Pineapple, ham, and a touch of coconut, bringing a tropical twist to defeat the frost giants' chill.</p>
            </li>
            
            <li>
              <h3>Mjolnir Meat Lovers</h3>
              <p>A protein-packed ensemble of pepperoni, sausage, bacon, and ground beef. Only the worthy can handle this feast!</p>
            </li>
            
            <li>
              <h3>Midgard Margherita</h3>
              <p>Fresh mozzarella, tomatoes, and basil, a classic combination to please both mortals and gods alike.</p>
            </li>
            
            <li>
              <h3>Valkyrie's Vegan Delight</h3>
              <p>Artichoke hearts, black olives, red onions, and vegan cheese. A divine choice for our plant-powered patrons!</p>
            </li>
        </ul>
        </div>
    `;
    main.appendChild(section);
}
