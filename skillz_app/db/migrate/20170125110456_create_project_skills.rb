class CreateProjectSkills < ActiveRecord::Migration
  def change
    create_table :project_skills do |t|
      t.references :project, index: true, foreign_key: true
      t.references :skill, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
