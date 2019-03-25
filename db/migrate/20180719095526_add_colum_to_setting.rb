class AddColumToSetting < ActiveRecord::Migration[5.1]
  def change
    add_column :settings, :setting_type, :string
  end
end
