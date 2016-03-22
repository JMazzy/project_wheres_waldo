class GamesController < ApplicationController

  def index
    @games = Game.all.select("(end_time - created_at) AS duration").order("duration ASC");
    respond_to do |format|

      format.html

      format.json { render json: @games }

    end
  end

  def create
    @game = Game.new
    if @game.save
      flash[:success] = "Created a new game!"

      respond_to do |format|

        format.html

        format.json { render json: @game }

      end
    else
      flash[:danger] = "Could not create a game!"

      respond_to do |format|

        format.html

        format.json { render nothing: true,
                              status: 400 }

      end
    end
  end

  def update
    @game = Game.find(params[:id])

    if @game.update( end_time: Time.now )
      flash[:success] = "Game complete!"

      respond_to do |format|

        format.html

        format.json { render json: @game }

      end
    else
      flash[:danger] = "Could not end the game!"

      respond_to do |format|

        format.html

        format.json { render  nothing: true,
                              status: 400 }

      end
    end

  end

end
