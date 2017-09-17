class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end


  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :poke_type, :image_url, :attack, :defense, :moves)
  end
end
