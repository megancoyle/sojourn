class DropDetails < ActiveRecord::Migration[5.0]
  def up
    drop_table :details
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
