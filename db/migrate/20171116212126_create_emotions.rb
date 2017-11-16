class CreateEmotions < ActiveRecord::Migration[5.1]
  def change
    create_table :emotions do |t|
      t.float :anger
      t.float :contempt
      t.float :disgust
      t.float :sadness
      t.float :neutral
      t.float :neutral
      t.float :suprise

      t.timestamps
    end
  end
end
