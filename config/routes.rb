Rails.application.routes.draw do
  root "photos#show"

  resources :games, only: [:create, :update, :index]
  resources :characters, only: [:index]
  resources :photos, only: [:show]
  resources :tags, only: [:create, :destroy]
end
