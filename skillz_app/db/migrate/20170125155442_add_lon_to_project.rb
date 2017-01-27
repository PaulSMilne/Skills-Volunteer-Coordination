class AddLonToProject < ActiveRecord::Migration
  def change
    add_column :projects, :lon, :float
  end
end
