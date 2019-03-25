class AddSettingTypeToSetting < ActiveRecord::Migration[5.1]
  def change
    puts "Add setting type to settings"
    if ActiveRecord::Base.connection.column_exists?(:settings, :setting_type)
      puts 'this column already exist'
    else

      add_column :settings, :setting_type, :string
    end

  end
end
