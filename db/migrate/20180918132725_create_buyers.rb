class CreateBuyers < ActiveRecord::Migration[5.2]
  def change
    create_table :buyers do |t|
      t.string :name
      t.text :description
      t.integer :age

      t.timestamps
    end
  end
end
