class Api::PlansController < ApplicationController
  before_action :cors_preflight_check
  after_action :cors_set_access_control_headers

  def index
    @plans = Plan.all
      render :json => @plans
  end

  def show
    @plan = Plan.find(params[:id])
    render :json => @plan
  end

  def new
    @plan = Plan.new
  end

  def edit
    @plan = Plan.find(params[:id])
  end

  def create
    @plan = Plan.new(plan_params)

    if @plan.save
      render json: @plan, status: :created
    else
      render json: @plan, status: :unprocessable_entity
    end
  end

  def update
    @plan = Plan.find(params[:id])
    if @plan.update(plan_params)
      render json: @plan
    else
      render json: @plan.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Plan.delete(params[:id])
    @plans = Plan.all
    render json: @plans
  end


  private
    def plan_params
      params.require(:plan).permit(:name, :weather, :possible_events, :notes)
    end

  protected
  def cors_preflight_check
    if request.method == 'OPTIONS'
      headers['Access-Control-Allow-Origin'] = '*'
      # ...
    end
  end

  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    # ...
  end

end
