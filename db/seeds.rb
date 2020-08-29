# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

teashops = Teashop.create([
  { 
    name: "Paper & Tea",
    image_url: "https://unsplash.com/photos/B43a-FPxYqU"
  },
  { 
    name: "Make Tea not War",
    image_url: "https://unsplash.com/photos/L82-kkEBOd0"
  },
  { 
    name: "Companion Tea",
    image_url: "https://unsplash.com/photos/DFtvglCPWjY"
  },
  { 
    name: "Berliner Teesalon",
    image_url: "https://unsplash.com/photos/qEcWgrTG578"
  },
  { 
    name: "Nan Yi Tee",
    image_url: "https://unsplash.com/photos/FmgZ5xzDG-s"
  },
  { 
    name: "ManuTeeFaktur",
    image_url: "https://unsplash.com/photos/x0t6DiAg118"
  },
])

reviews = Review.create([
  {
    title: 'Great tea',
    description: 'All kinds of tea are there',
    score: 5,
    teashop: teashops.first
  },
  {
    title: 'Terrible',
    description: 'Their tea is just dust',
    score: 1,
    teashop: teashops.first
  }
])
