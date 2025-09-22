const recipes = [
      {
        id: 1,
        title: "Avocado Toast",
        category: "breakfast",
        desc: "Simple and nutritious start to your day.",
        image: "./images/AvocadoToast.webp",
        ingredients: ["2 slices whole grain bread", "1 ripe avocado", "1 poached egg", "Salt and pepper"],
        steps: ["Toast the bread slices.", "Mash the avocado and spread on toast.", "Top with poached egg and season."],
        nutrition: { cal: 300, prot: 10, carb: 25, fat: 20 }
      },
      {
        id: 2,
        title: "Quinoa Salad",
        category: "lunch",
        desc: "Fresh and filling salad packed with protein.",
        image: "./images/QuinoaSalad.webp",
        ingredients: ["1 cup quinoa", "1 cucumber", "Cherry tomatoes", "Feta cheese", "Olive oil dressing"],
        steps: ["Cook quinoa according to package.", "Chop vegetables and mix with quinoa.", "Drizzle with dressing and serve."],
        nutrition: { cal: 400, prot: 15, carb: 50, fat: 15 }
      },
      {
        id: 3,
        title: "Grilled Chicken",
        category: "dinner",
        desc: "Lean protein with veggies for a balanced meal.",
        image: "./images/GrilledChicken.webp",
        ingredients: ["4 oz chicken breast", "Mixed greens", "Lemon", "Herbs"],
        steps: ["Marinate chicken in lemon and herbs.", "Grill until cooked.", "Serve over greens."],
        nutrition: { cal: 350, prot: 30, carb: 10, fat: 15 }
      },
      {
        id: 4,
        title: "Berry Smoothie",
        category: "snack",
        desc: "Packed with vitamins, antioxidants, and fiber.",
        image: "./images/BerrySmoothie.webp",
        ingredients: ["1 cup berries", "1 banana", "Almond milk", "Yogurt"],
        steps: ["Blend all ingredients until smooth.", "Pour and enjoy."],
        nutrition: { cal: 200, prot: 5, carb: 40, fat: 3 }
      },
      {
        id: 5,
        title: "Egg and cheese quesadilla",
        category: "breakfast",
        desc: "A quick and comforting meal.",
        image: "./images/Eggcheesequesadilla.webp",
        ingredients: ["1 large tortilla", "1–2 eggs", "Shredded cheese", "Optional salsa"],
        steps: ["Add the scrambled eggs and fold the tortilla in half.", "Cook until golden brown.", "Cheese is melted."],
        nutrition: { cal: 300, prot: 15, carb: 140, fat: 30 }
      },
      {
        id: 6,
        title: "Simple spinach omelet",
        category: "breakfast",
        desc: "Hot and nutritious breakfast in minutes.",
        image: "./images/Simplespinachomelet.webp",
        ingredients: ["2 eggs", "A handful of fresh spinach", "cheese (optional)"],
        steps: ["Sauté the spinach in a pan.", "Pour the eggs over the spinach and cook until set.", "Sprinkle cheese on top and fold the omelet."],
        nutrition: { cal: 450, prot: 16, carb: 170, fat: 35 }
      },
      {
        id: 7,
        title: "Mini egg muffins",
        category: "breakfast",
        desc: "These are individual frittata-like bites baked in a muffin tin",
        image: "./images/Minieggmuffins.webp",
        ingredients: ["4–6 eggs", "a splash of milk", "shredded cheese"],
        steps: ["Pour the egg mixture into a greased muffin tin.", "Top with cheese.", "Bake at 375°F (190°C) until set."],
        nutrition: { cal: 375, prot: 18, carb: 120, fat: 25 }
      },
      {
        id: 8,
        title: "Turkey Sandwich",
        category: "lunch",
        desc: "A wholesome sandwich with lean turkey and creamy avocado.",
        image: "./images/Turkey&AvocadoSandwich.webp",
        ingredients: ["2 slices whole grain bread", "Sliced turkey breast", "1/2 avocado", "Lettuce", "Mustard"],
        steps: ["Toast bread lightly.", "Mash avocado and spread on bread.", "Layer turkey and lettuce.", "Add mustard, assemble, and serve."],
        nutrition: { cal: 420, prot: 28, carb: 40, fat: 14 }
      },
      {
        id: 9,
        title: "Grilled Chicken Wrap",
        category: "lunch",
        desc: "A protein-rich wrap with fresh veggies.",
        image: "./images/GrilledChickenWrap.webp",
        ingredients: ["1 whole wheat wrap", "Grilled chicken breast", "Lettuce", "Tomato", "Greek yogurt sauce"],
        steps: ["Grill chicken and slice.", "Layer chicken and veggies in wrap.", "Add sauce, roll up, and serve."],
        nutrition: { cal: 450, prot: 30, carb: 40, fat: 12 }
      },
      {
        id: 10,
        title: "Chickpea Bowl",
        category: "lunch",
        desc: "A hearty bowl with chickpeas, grains, and veggies.",
        image: "./images/ChickpeaBowl.webp",
        ingredients: ["1 cup brown rice", "1 cup chickpeas", "Cucumber", "Red onion", "Tahini sauce"],
        steps: ["Cook rice and set aside.", "Mix rice, chickpeas, and veggies.", "Top with tahini sauce and serve."],
        nutrition: { cal: 480, prot: 18, carb: 60, fat: 14 }
      },
      {
        id: 11,
        title: "Fruit & Nut Mix",
        category: "snack",
        desc: "A quick energy boost with nuts and dried fruit.",
        image: "./images/Fruit&NutMix.webp",
        ingredients: ["Almonds", "Cashews", "Raisins", "Dried cranberries", "Pumpkin seeds"],
        steps: ["Mix all ingredients in a bowl.", "Store in an airtight container.", "Enjoy as a quick snack."],
        nutrition: { cal: 250, prot: 7, carb: 22, fat: 15 }
      },
      {
        id: 12,
        title: "Greek Yogurt Parfait",
        category: "snack",
        desc: "Creamy yogurt layered with fruits and granola.",
        image: "./images/GreekYogurtParfait.webp",
        ingredients: ["1 cup Greek yogurt", "Mixed berries", "Granola", "Honey"],
        steps: ["Spoon yogurt into a glass.", "Layer with berries and granola.", "Drizzle with honey and serve."],
        nutrition: { cal: 280, prot: 12, carb: 36, fat: 8 }
      },
      {
        id: 13,
        title: "Veggie Sticks",
        category: "snack",
        desc: "Crunchy vegetables served with creamy hummus.",
        image: "./images/VeggieSticksHummus.webp",
        ingredients: ["Carrot sticks", "Cucumber sticks", "Celery sticks", "Hummus dip"],
        steps: ["Wash and slice vegetables.", "Arrange on a plate.", "Serve with hummus for dipping."],
        nutrition: { cal: 180, prot: 6, carb: 20, fat: 9 }
      },
      {
        id: 14,
        title: "Grilled Salmon",
        category: "dinner",
        desc: "Nutritious salmon fillet with roasted vegetables.",
        image: "./images/GrilledSalmonVeggies.webp",
        ingredients: ["1 salmon fillet", "Broccoli florets", "Carrots", "Olive oil", "Lemon"],
        steps: ["Season salmon with olive oil and lemon.", "Grill salmon until cooked.", "Roast veggies and serve together."],
        nutrition: { cal: 520, prot: 35, carb: 25, fat: 28 }
      },
      {
        id: 15,
        title: "Pasta Primavera",
        category: "dinner",
        desc: "Light pasta dish with fresh seasonal vegetables.",
        image: "./images/PastaPrimavera.webp",
        ingredients: ["Whole wheat pasta", "Zucchini", "Bell peppers", "Garlic", "Parmesan cheese"],
        steps: ["Cook pasta until al dente.", "Sauté vegetables with garlic.", "Toss pasta with veggies and cheese."],
        nutrition: { cal: 480, prot: 15, carb: 70, fat: 12 }
      },
      {
        id: 16,
        title: "Stir-Fried Tofu & Rice",
        category: "dinner",
        desc: "Flavorful stir-fry with tofu and rice.",
        image: "./images/TofuStirFry.webp",
        ingredients: ["1 block tofu", "1 cup rice", "Soy sauce", "Mixed vegetables", "Sesame oil"],
        steps: ["Cook rice and set aside.", "Stir-fry tofu until golden.", "Add vegetables and sauce, mix with rice."],
        nutrition: { cal: 500, prot: 20, carb: 65, fat: 15 }
      }
    ];

    function displayRecipes(recipesToShow) {
      const grid = document.getElementById('recipesGrid');
      grid.innerHTML = recipesToShow.map(r => `
        <div class="card reveal">
          <img src="${r.image}" alt="${r.title}">
          <h3>${r.title}</h3>
          <p>${r.desc}</p>
          <button onclick="openModal(${r.id})">View Full Recipe</button>
        </div>
      `).join('');
    }

    function filterRecipes() {
      const search = document.getElementById('search').value.toLowerCase();
      const cat = document.getElementById('categoryFilter').value;
      const filtered = recipes.filter(r =>
        r.title.toLowerCase().includes(search) &&
        (!cat || r.category === cat)
      );
      displayRecipes(filtered);
    }

    document.getElementById('search').addEventListener('input', filterRecipes);
    document.getElementById('categoryFilter').addEventListener('change', filterRecipes);

    function openModal(id) {
      const recipe = recipes.find(r => r.id === id);
      document.getElementById('modalBody').innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" style="width:100%; border-radius:4px;">
        <h2>${recipe.title}</h2>
        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <h3>Steps</h3>
        <ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
        <h3>Nutrition Info</h3>
        <table style="width:100%; border-collapse:collapse;">
          <tr><th style="border:1px solid #ddd; padding:0.5rem;">Nutrient</th><th style="border:1px solid #ddd; padding:0.5rem;">Amount</th></tr>
          <tr><td style="border:1px solid #ddd; padding:0.5rem;">Calories</td><td style="border:1px solid #ddd; padding:0.5rem;">${recipe.nutrition.cal} kcal</td></tr>
          <tr><td style="border:1px solid #ddd; padding:0.5rem;">Protein</td><td style="border:1px solid #ddd; padding:0.5rem;">${recipe.nutrition.prot}g</td></tr>
          <tr><td style="border:1px solid #ddd; padding:0.5rem;">Carbs</td><td style="border:1px solid #ddd; padding:0.5rem;">${recipe.nutrition.carb}g</td></tr>
          <tr><td style="border:1px solid #ddd; padding:0.5rem;">Fat</td><td style="border:1px solid #ddd; padding:0.5rem;">${recipe.nutrition.fat}g</td></tr>
        </table>
        <button onclick="saveRecipe(${id})" style="margin-top:1rem;">Save Recipe</button>
      `;
      document.getElementById('modal').style.display = 'block';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

    function saveRecipe(id) {
      let saved = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
      if (!saved.includes(id)) {
        saved.push(id);
        localStorage.setItem('savedRecipes', JSON.stringify(saved));
        alert('Recipe saved!');
      } else {
        alert('Recipe already saved!');
      }
    }

    // Close modal on outside click
    window.onclick = (event) => {
      const modal = document.getElementById('modal');
      if (event.target === modal) closeModal();
    }

displayRecipes(recipes);