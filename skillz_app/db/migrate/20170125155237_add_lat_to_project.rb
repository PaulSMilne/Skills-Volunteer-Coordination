class AddLatToProject < ActiveRecord::Migration
  def change
    add_column :projects, :lat, :float
  end
end
