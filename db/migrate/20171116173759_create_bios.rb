class CreateBios < ActiveRecord::Migration[5.1]
  def change
    create_table :bios do |t|
      t.string :title
      t.string :picture
      t.string :description

      t.timestamps
    end
  end
end
