class AddColumnosToEmotion < ActiveRecord::Migration[5.1]
  def change
    add_column :emotions, :happiness, :float
    add_column :emotions, :fear, :float
  end
end
