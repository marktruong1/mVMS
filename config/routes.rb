Rails.application.routes.draw do
  get 'setup/index'
  match '/setup', to: 'setup#index', via: [:get, :post]

  resources :people
  get 'admin', to: 'visitor_log#index'
  get 'visitor_log/index'
  get '/visitor_log', to: 'visitor_log#index'
  get 'visitor_log/:action', controller: 'visitor_log'
  resources :companies
  resources :reasons

  devise_for :users
  resources :employees, path: :persons, except: [:edit] do
    member do
      get 'log_in'
    end
    get 'home/index', as: 'home'
  end

  resources :users, only: [:index, :show, :destroy] do
    collection do
      match 'recently_connected', via: [:post, :get]
      match 'active', via: [:post, :get]
      match 'audit', via: [ :get]
    end
    member do
      get 'require_change_password'
      get 'restore'
      get 'lock'
      get 'unlock'
      put 'change_password'
      put 'change_basic_info'
      put 'attachments'
      post 'image_upload'
      get 'remove_image'
    end


  end


  root to: 'welcome#visitors'

  match '/create_visitor', to: 'welcome#create_visitor', via: [:get, :post]

  get '/update_visitor', to: 'welcome#update_visitor'
  post '/update_visitor_visit', to: 'welcome#update_visitor_visit'
  post '/get_visitor_info', to: 'welcome#get_visitor_info'
  get '/visitors', to: 'welcome#visitors'
  get '/visitor_bye', to: 'welcome#visitor_bye'
  match '/visitor_signout', to: 'welcome#visitor_signout', via: [:get, :post]
  match '/check_visitor', to: 'welcome#check_visitor', via: [:get, :post]
  get '/visitor_sign_form', to: 'welcome#visitor_sign_form'
  get '/visitor_badge', to: 'welcome#visitor_badge'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
