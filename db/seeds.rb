require 'faker'

100.times do
  Buyer.create(
    name:        Faker::Name.name_with_middle,
    description: Faker::Job.title,
    age:         Faker::Number.between(18, 60)
  )
end
